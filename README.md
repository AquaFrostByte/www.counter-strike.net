<img width="1200" height="267" alt="Screenshot_20260627_152334" src="https://github.com/user-attachments/assets/7cff6691-fd70-4935-a36f-81ad97bb6b63" />

# Counter-Strike Website from the 2000s

A recreation of the original **Counter-Strike** website from the early 2000s.

This project includes a modern **Flask** backend while preserving the classic look and feel of the original site. The backend makes it easy to add features such as automatic download links or other dynamic content in the future.

The website is intentionally lightweight, so it should run well even on older, low-memory PCs.

If u want to see the template its currently hosted on Cstrike2k.lain.onl

### Why?

I love retro stuff this includes the old Internet. Its sad that sides like this are only preservt in the rather slow Internet Arcive. I want those websites to not only be arcived i want them 2 be used and seen!!

### Watch out!

I didnt clean out all old links! This includes for exampole the [Hosted Sites] most links should be dead but always watch out for that!

## Modernization

Some parts of the original website have been modernized to improve compatibility while keeping the original design intact.

### Changes

* Rewritten HTML for modern browser compatibility.
* Broken or outdated links have either been fixed for Flask or removed.
* Banner advertisements can be customized by editing `AdBanner.js`.

* There is one change that isnt in the original which i personaly found to be prettyer. That is that the site is contained in 1200px width. This can be changed in the style.css.

## Template

This recreation is mainly intended as a template that others can use as a starting point for their own retro-style websites.

Most of the original content has been removed, leaving only example content to demonstrate where different elements belong.

I also plan to base my own personal website on this project, which will be released separately.

There is an Cstrike2k.service file with what u can easely auto deploy it on a Linux server.

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

You should have Python installed on the System.
The Python virtual environment (`.venv`) is **not** included in the repository.

To install the required dependencies, run:

```bash
pip install -r requirements.txt
```

If u dont know how to set up a venv this is fine, just follow these stepps:
Run this in the Flask folder (If u are on Debian u need to use python3 instad of just python)
```bash
python -m venv .venv
source .venv/bin/activate
```

Then u can install the requirements :

```bash
pip install -r requirements.txt
```

To Run the Site on ur Pc or Server u can use the setup_Cstrike.sh script which makes a Service file:

```bash
chmod +x setup_Cstrike.sh
```

```bash
./setup_Cstrike.sh
```

# Previews

## Index.html

<img width="1200" height="1268" alt="image" src="https://github.com/user-attachments/assets/1d0db72b-da61-469c-82a4-6d0f33be7629" />

## Downloads.html

<img width="1200" height="1268" alt="image" src="https://github.com/user-attachments/assets/5fce77de-da54-4677-99af-9839fc0b4c9e" />

## Template.html

<img width="1200" height="1275" alt="image" src="https://github.com/user-attachments/assets/4c76a531-95c2-42f3-83e6-17baf186182f" />



# Recources Used
The main Version i tryed to imitate was the in 2000 Arcived Version of counter-strike.net
https://www.webdesignmuseum.org/gallery/counter-strike-in-2000
https://web.archive.org/web/20001019044252/http://www.counter-strike.net/

The AdBanners were from : https://www.banner-depot-2000.net/ (excluding ArchMania which is a Project of mine so made by me :3 )

