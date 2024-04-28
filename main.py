from flask import Flask, render_template
from Website import create_app

app = Flask(__name__)

app = create_app()

if __name__ == "__main__":
    app.run()