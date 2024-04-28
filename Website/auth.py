from flask import Flask, render_template, request, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

users = {} # TODO: Import users from the sql database

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        if username in users:
            return 'Username already exists!'
        
        hashed_password = generate_password_hash(password)
        users[username] = hashed_password
        
        return 'Signup successful!'
    
    return render_template('signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        if username not in users:
            return 'Username does not exist!'
        
        hashed_password = users[username]
        
        if check_password_hash(hashed_password, password):
            session['username'] = username
            return 'Login successful!'
        else:
            return 'Incorrect password!'
    
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return 'Logged out successfully!'