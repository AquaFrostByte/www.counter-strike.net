from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/template')
def template():
    return render_template('template.html')

@app.route('/downloads')
def downloads():
    return render_template('downloads.html')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5002)