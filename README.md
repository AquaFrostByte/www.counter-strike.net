<img width="1200" height="267" alt="Screenshot_20260627_152334" src="https://github.com/user-attachments/assets/7cff6691-fd70-4935-a36f-81ad97bb6b63" />

# Counter-Strike Website from the 2000s

A recreation of the original **Counter-Strike** website from the early 2000s.

This project includes a modern **Flask** backend while preserving the classic look and feel of the original site. The backend makes it easy to add features such as automatic download links or other dynamic content in the future.

The website is intentionally lightweight, so it should run well even on older, low-memory PCs.

## Modernization

Some parts of the original website have been modernized to improve compatibility while keeping the original design intact.

### Changes

* Rewritten HTML for modern browser compatibility.
* Broken or outdated links have either been fixed for Flask or removed.
* Banner advertisements can be customized by editing `AdBanner.js`.

## Template

This recreation is mainly intended as a template that others can use as a starting point for their own retro-style websites.

Most of the original content has been removed, leaving only example content to demonstrate where different elements belong.

I also plan to base my own personal website on this project, which will be released separately.

## Project Structure

```text
Frontend/
├── Original HTML files (partially fixed)

Flask/
├── Fully rewritten website using Flask
  ├──Index.htlm    -> The Start site which has a bit diffrent width then the other Sides.
  ├──Download.html -> The Site that would have noramly linked all downloads.
  ├──Template.html -> General Template for all other sites that would have been About and so on they are all the same.
Home/
├── My personal website (coming soon)
```

## Requirements

The Python virtual environment (`.venv`) is **not** included in the repository.

To install the required dependencies, run:

```bash
pip install -r requirements.txt
```

#Previews

##Index.html

<img width="1200" height="1268" alt="image" src="https://github.com/user-attachments/assets/1d0db72b-da61-469c-82a4-6d0f33be7629" />

##Downloads.html

<img width="1200" height="1268" alt="image" src="https://github.com/user-attachments/assets/5fce77de-da54-4677-99af-9839fc0b4c9e" />

##Template.html

<img width="1200" height="1275" alt="image" src="https://github.com/user-attachments/assets/4c76a531-95c2-42f3-83e6-17baf186182f" />
