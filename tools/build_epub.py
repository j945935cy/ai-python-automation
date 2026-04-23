from __future__ import annotations

from datetime import datetime, timezone
from html import escape
from pathlib import Path
from uuid import uuid4
from zipfile import ZIP_DEFLATED, ZIP_STORED, ZipFile


ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "src"
EPUB_DIR = ROOT / "epub"
OEBPS_DIR = EPUB_DIR / "OEBPS"
TEXT_DIR = OEBPS_DIR / "Text"
STYLES_DIR = OEBPS_DIR / "Styles"
IMAGES_DIR = OEBPS_DIR / "Images"

BOOK_ID = f"urn:uuid:{uuid4()}"
TITLE = "AI 自動化工具書：Python 實戰版"
AUTHOR = "OpenAI Codex"
PUBLISHER = "OpenAI"
LANGUAGE = "zh-Hant"
DESCRIPTION = "一本給初學者的 Python + AI 自動化教材，涵蓋檔案、Excel、爬蟲、Selenium、桌面與報表自動化。"
SUBJECT = "Computers / Programming / Automation"
DATE_ISO = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

CHAPTERS = [
    ("chapter01-ai-automation-concepts.md", "chapter01.xhtml", "第 1 章：AI 自動化概念"),
    ("chapter02-prompt-basics.md", "chapter02.xhtml", "第 2 章：Prompt 基礎"),
    ("chapter03-reading-ai-code.md", "chapter03.xhtml", "第 3 章：看懂 AI 程式"),
    ("chapter04-file-automation.md", "chapter04.xhtml", "第 4 章：檔案自動化"),
    ("chapter05-excel-automation.md", "chapter05.xhtml", "第 5 章：Excel 自動化"),
    ("chapter06-web-scraping.md", "chapter06.xhtml", "第 6 章：網頁爬蟲"),
    ("chapter07-selenium-automation.md", "chapter07.xhtml", "第 7 章：Selenium 自動化"),
    ("chapter08-desktop-automation.md", "chapter08.xhtml", "第 8 章：桌面自動化"),
    ("chapter09-report-automation.md", "chapter09.xhtml", "第 9 章：報表自動化"),
    ("chapter10-final-project.md", "chapter10.xhtml", "第 10 章：完整專案"),
]


def ensure_dirs() -> None:
    for directory in [EPUB_DIR, EPUB_DIR / "META-INF", OEBPS_DIR, TEXT_DIR, STYLES_DIR, IMAGES_DIR]:
        directory.mkdir(parents=True, exist_ok=True)


def markdown_to_xhtml(title: str, markdown_text: str) -> str:
    lines = markdown_text.splitlines()
    body: list[str] = []
    in_code = False
    in_list = False
    paragraph_buffer: list[str] = []

    def flush_paragraph() -> None:
        nonlocal paragraph_buffer
        if paragraph_buffer:
            paragraph = " ".join(paragraph_buffer).strip()
            if paragraph:
                body.append(f"<p>{escape(paragraph)}</p>")
            paragraph_buffer = []

    def close_list() -> None:
        nonlocal in_list
        if in_list:
            body.append("</ul>")
            in_list = False

    for raw_line in lines:
        line = raw_line.rstrip()
        stripped = line.strip()

        if stripped.startswith("```"):
            flush_paragraph()
            close_list()
            if not in_code:
                body.append("<pre><code>")
                in_code = True
            else:
                body.append("</code></pre>")
                in_code = False
            continue

        if in_code:
            body.append(escape(line))
            continue

        if not stripped:
            flush_paragraph()
            close_list()
            continue

        if stripped.startswith("# "):
            flush_paragraph()
            close_list()
            body.append(f"<h1>{escape(stripped[2:])}</h1>")
            continue

        if stripped.startswith("## "):
            flush_paragraph()
            close_list()
            body.append(f"<h2>{escape(stripped[3:])}</h2>")
            continue

        if stripped.startswith("### "):
            flush_paragraph()
            close_list()
            body.append(f"<h3>{escape(stripped[4:])}</h3>")
            continue

        if stripped.startswith("- "):
            flush_paragraph()
            if not in_list:
                body.append("<ul>")
                in_list = True
            body.append(f"<li>{escape(stripped[2:])}</li>")
            continue

        if (
            ". " in stripped
            and stripped.split(". ", 1)[0].isdigit()
        ):
            flush_paragraph()
            if not in_list:
                body.append("<ul>")
                in_list = True
            body.append(f"<li>{escape(stripped.split('. ', 1)[1])}</li>")
            continue

        paragraph_buffer.append(stripped)

    flush_paragraph()
    close_list()

    return f"""<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-Hant" xml:lang="zh-Hant">
  <head>
    <title>{escape(title)}</title>
    <link rel="stylesheet" type="text/css" href="../Styles/book.css"/>
  </head>
  <body>
    <section class="chapter">
      {''.join(body)}
    </section>
  </body>
</html>
"""


def write_cover_svg() -> None:
    cover_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="2560" viewBox="0 0 1600 2560">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5fbff"/>
      <stop offset="100%" stop-color="#cfe7ff"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="2560" fill="url(#bg)"/>
  <circle cx="1280" cy="440" r="280" fill="#a9d3ff" opacity="0.45"/>
  <circle cx="350" cy="1970" r="340" fill="#dff1ff" opacity="0.9"/>
  <text x="140" y="340" font-size="72" font-family="Segoe UI, Noto Sans TC, sans-serif" fill="#2474c9">Python + AI 自動化教材</text>
  <text x="140" y="620" font-size="152" font-family="Segoe UI, Noto Sans TC, sans-serif" font-weight="700" fill="#10314b">AI 自動化</text>
  <text x="140" y="790" font-size="152" font-family="Segoe UI, Noto Sans TC, sans-serif" font-weight="700" fill="#10314b">工具書</text>
  <text x="140" y="965" font-size="112" font-family="Segoe UI, Noto Sans TC, sans-serif" fill="#2f5f84">Python 實戰版</text>
  <text x="140" y="1240" font-size="58" font-family="Segoe UI, Noto Sans TC, sans-serif" fill="#4b7395">檔案自動化 / Excel / 爬蟲 / Selenium / 報表專案</text>
  <rect x="140" y="1420" width="460" height="8" fill="#2d84d8"/>
  <text x="140" y="2260" font-size="56" font-family="Segoe UI, Noto Sans TC, sans-serif" fill="#4b7395">OpenAI Codex</text>
</svg>
"""
    (IMAGES_DIR / "cover.svg").write_text(cover_svg, encoding="utf-8")


def write_static_files() -> None:
    (EPUB_DIR / "mimetype").write_text("application/epub+zip", encoding="utf-8")

    container_xml = """<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>
"""
    (EPUB_DIR / "META-INF" / "container.xml").write_text(container_xml, encoding="utf-8")

    book_css = """body { font-family: serif; line-height: 1.7; color: #163247; margin: 5%; }
h1, h2, h3 { color: #17354d; }
h1 { font-size: 1.8em; margin-top: 0; }
h2 { margin-top: 1.4em; }
pre { background: #eef6fc; padding: 1em; white-space: pre-wrap; }
code { font-family: monospace; }
ul { padding-left: 1.2em; }
.cover-page { margin: 0; text-align: center; }
.cover-page img { width: 100%; height: auto; }
"""
    (STYLES_DIR / "book.css").write_text(book_css, encoding="utf-8")

    cover_xhtml = """<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-Hant" xml:lang="zh-Hant">
  <head>
    <title>封面</title>
    <link rel="stylesheet" type="text/css" href="../Styles/book.css"/>
  </head>
  <body class="cover-page">
    <img src="../Images/cover.svg" alt="AI 自動化工具書：Python 實戰版 封面"/>
  </body>
</html>
"""
    (TEXT_DIR / "cover.xhtml").write_text(cover_xhtml, encoding="utf-8")


def build_chapters() -> list[tuple[str, str]]:
    manifest_entries: list[tuple[str, str]] = []

    for source_name, output_name, title in CHAPTERS:
        markdown = (SRC_DIR / source_name).read_text(encoding="utf-8")
        xhtml = markdown_to_xhtml(title, markdown)
        (TEXT_DIR / output_name).write_text(xhtml, encoding="utf-8")
        manifest_entries.append((output_name, title))

    return manifest_entries


def write_navigation(chapters: list[tuple[str, str]]) -> None:
    nav_items = "\n".join(
        f'        <li><a href="Text/{filename}">{escape(title)}</a></li>' for filename, title in chapters
    )

    nav_xhtml = f"""<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="zh-Hant" xml:lang="zh-Hant">
  <head>
    <title>目錄</title>
  </head>
  <body>
    <nav epub:type="toc" id="toc">
      <h1>目錄</h1>
      <ol>
        <li><a href="Text/cover.xhtml">封面</a></li>
{nav_items}
      </ol>
    </nav>
  </body>
</html>
"""
    (OEBPS_DIR / "nav.xhtml").write_text(nav_xhtml, encoding="utf-8")

    toc_items = "\n".join(
        f'    <navPoint id="navPoint-{index}" playOrder="{index}"><navLabel><text>{escape(title)}</text></navLabel><content src="Text/{filename}"/></navPoint>'
        for index, (filename, title) in enumerate(chapters, start=2)
    )
    toc_ncx = f"""<?xml version="1.0" encoding="utf-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="{escape(BOOK_ID)}"/>
  </head>
  <docTitle>
    <text>{escape(TITLE)}</text>
  </docTitle>
  <navMap>
    <navPoint id="navPoint-1" playOrder="1">
      <navLabel><text>封面</text></navLabel>
      <content src="Text/cover.xhtml"/>
    </navPoint>
{toc_items}
  </navMap>
</ncx>
"""
    (OEBPS_DIR / "toc.ncx").write_text(toc_ncx, encoding="utf-8")


def write_package(chapters: list[tuple[str, str]]) -> None:
    chapter_manifest = "\n".join(
        f'    <item id="text-{index}" href="Text/{filename}" media-type="application/xhtml+xml"/>'
        for index, (filename, _title) in enumerate(chapters, start=1)
    )
    chapter_spine = "\n".join(
        f'    <itemref idref="text-{index}"/>'
        for index, _ in enumerate(chapters, start=1)
    )

    content_opf = f"""<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="{LANGUAGE}">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="bookid">{escape(BOOK_ID)}</dc:identifier>
    <dc:title>{escape(TITLE)}</dc:title>
    <dc:language>{LANGUAGE}</dc:language>
    <dc:creator>{escape(AUTHOR)}</dc:creator>
    <dc:publisher>{escape(PUBLISHER)}</dc:publisher>
    <dc:description>{escape(DESCRIPTION)}</dc:description>
    <dc:subject>{escape(SUBJECT)}</dc:subject>
    <dc:date>{DATE_ISO}</dc:date>
    <meta property="dcterms:modified">{DATE_ISO}</meta>
    <meta name="cover" content="cover-image"/>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="book-css" href="Styles/book.css" media-type="text/css"/>
    <item id="cover-image" href="Images/cover.svg" media-type="image/svg+xml" properties="cover-image"/>
    <item id="cover-page" href="Text/cover.xhtml" media-type="application/xhtml+xml"/>
{chapter_manifest}
  </manifest>
  <spine toc="ncx">
    <itemref idref="cover-page"/>
{chapter_spine}
  </spine>
</package>
"""
    (OEBPS_DIR / "content.opf").write_text(content_opf, encoding="utf-8")


def package_epub() -> Path:
    output_path = EPUB_DIR / "ai-python-automation-play-books.epub"
    if output_path.exists():
        output_path.unlink()

    with ZipFile(output_path, "w") as epub_zip:
        epub_zip.write(EPUB_DIR / "mimetype", "mimetype", compress_type=ZIP_STORED)

        for file_path in sorted(EPUB_DIR.rglob("*")):
            if file_path.is_dir() or file_path.name == output_path.name or file_path.name == "mimetype":
                continue
            arcname = file_path.relative_to(EPUB_DIR).as_posix()
            epub_zip.write(file_path, arcname, compress_type=ZIP_DEFLATED)

    return output_path


def main() -> None:
    ensure_dirs()
    write_cover_svg()
    write_static_files()
    chapter_entries = build_chapters()
    write_navigation(chapter_entries)
    write_package(chapter_entries)
    output = package_epub()
    print(f"Built EPUB: {output}")


if __name__ == "__main__":
    main()
