from __future__ import annotations

import sys
import zipfile
from pathlib import Path
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "src"
WEB_DIR = ROOT / "web"
EPUB_DIR = ROOT / "epub"
EPUB_FILE = EPUB_DIR / "ai-python-automation-play-books.epub"

REQUIRED_CHAPTER_HEADINGS = [
    "## 概念說明",
    "## 程式範例",
    "## AI 任務",
    "## AI Prompt 範例",
    "## 練習題",
    "## 挑戰題",
    "## 小結",
]


def check(condition: bool, success: str, failure: str, failures: list[str]) -> None:
    if condition:
        print(f"[PASS] {success}")
    else:
        print(f"[FAIL] {failure}")
        failures.append(failure)


def validate_src(failures: list[str]) -> None:
    chapter_files = sorted(SRC_DIR.glob("chapter*.md"))
    check(len(chapter_files) == 10, "src 共有 10 章 Markdown", f"src 章節數量錯誤：{len(chapter_files)}", failures)

    for chapter_file in chapter_files:
        content = chapter_file.read_text(encoding="utf-8")
        for heading in REQUIRED_CHAPTER_HEADINGS:
            check(
                heading in content,
                f"{chapter_file.name} 含 {heading}",
                f"{chapter_file.name} 缺少 {heading}",
                failures,
            )


def validate_web(failures: list[str]) -> None:
    for name in ["index.html", "chapter.html", "styles.css", "script.js"]:
        check((WEB_DIR / name).exists(), f"web/{name} 存在", f"web/{name} 不存在", failures)

    script = (WEB_DIR / "script.js").read_text(encoding="utf-8")
    check(
        script.count('id: "chapter') == 5,
        "網頁試閱資料只包含 Chapter 1~5",
        "網頁試閱章節數不是 5",
        failures,
    )
    check(
        "https://play.google.com/store/books" in script and 'id: "chapter05"' in script,
        "Chapter 5 含 Google Play Books CTA",
        "Chapter 5 缺少 Google Play Books CTA",
        failures,
    )


def validate_epub(failures: list[str]) -> None:
    check(EPUB_FILE.exists(), ".epub 檔已存在", ".epub 檔不存在", failures)
    if not EPUB_FILE.exists():
        return

    with zipfile.ZipFile(EPUB_FILE) as zf:
        infos = zf.infolist()
        names = [info.filename for info in infos]

        check(bool(infos), "EPUB ZIP 可正常讀取", "EPUB ZIP 無法讀取", failures)
        if infos:
            check(infos[0].filename == "mimetype", "首個 ZIP 項目是 mimetype", f"首個 ZIP 項目不是 mimetype，而是 {infos[0].filename}", failures)
            check(infos[0].compress_type == zipfile.ZIP_STORED, "mimetype 使用未壓縮格式", "mimetype 不是未壓縮格式", failures)

        for required in [
            "META-INF/container.xml",
            "OEBPS/content.opf",
            "OEBPS/nav.xhtml",
            "OEBPS/Text/cover.xhtml",
            "OEBPS/Images/cover.svg",
        ]:
            check(required in names, f"{required} 存在", f"{required} 缺失", failures)

        chapter_xhtml = [name for name in names if name.startswith("OEBPS/Text/chapter") and name.endswith(".xhtml")]
        check(len(chapter_xhtml) == 10, "EPUB 含 10 章 XHTML", f"EPUB 章節 XHTML 數量錯誤：{len(chapter_xhtml)}", failures)

        content_opf = ET.fromstring(zf.read("OEBPS/content.opf"))
        ns = {"opf": "http://www.idpf.org/2007/opf", "dc": "http://purl.org/dc/elements/1.1/"}
        metadata = content_opf.find("opf:metadata", ns)
        required_meta = [
            ("dc:title", "title"),
            ("dc:language", "language"),
            ("dc:creator", "creator"),
            ("dc:publisher", "publisher"),
            ("dc:description", "description"),
        ]
        for tag, label in required_meta:
            check(
                metadata is not None and metadata.find(tag, ns) is not None and (metadata.find(tag, ns).text or "").strip(),
                f"content.opf 含 {label} metadata",
                f"content.opf 缺少 {label} metadata",
                failures,
            )

        cover_meta = metadata.findall("opf:meta", ns) if metadata is not None else []
        check(
            any(item.attrib.get("name") == "cover" or item.attrib.get("property") == "cover-image" for item in cover_meta),
            "content.opf 含封面 metadata",
            "content.opf 缺少封面 metadata",
            failures,
        )


def main() -> int:
    failures: list[str] = []

    validate_src(failures)
    validate_web(failures)
    validate_epub(failures)

    if failures:
        print("\nValidation finished with failures:")
        for item in failures:
            print(f"- {item}")
        return 1

    print("\nAll local validation checks passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
