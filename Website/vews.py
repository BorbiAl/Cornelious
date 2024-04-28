from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = app.config['SECRET_KEY']

@app.route("/")
def home():
    return render_template("Home.html")