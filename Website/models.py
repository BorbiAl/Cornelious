import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False, Unique = True)
    email = db.Column(db.String(200), unique=True, nullable=False, Unique = True)
    password = db.Column(db.Sting(200), nullable=False)

    def __repr__(self):
        return f"Account(username='{self.username}', email='{self.email}')"

class Chat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('Account.id'), nullable=False)
    receiver_id = db.Column(db.Integer, db.ForeignKey('Account.id'), nullable=False)
    message = db.Column(db.Text, nullable=False)

    sender = db.relationship('Account', foreign_keys=[sender_id])
    receiver = db.relationship('Account', foreign_keys=[receiver_id])

    def __repr__(self):
        return f"Chat(sender='{self.sender.username}', receiver='{self.receiver.username}', message='{self.message}')"

class GroupChat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    members = db.relationship('Account', secondary='groupchat_member', backref='groupchats')

    def __repr__(self):
        return f"GroupChat(name='{self.name}')"

groupchat_member = db.Table('groupchat_member',
    db.Column('groupchat_id', db.Integer, db.ForeignKey('groupchat.id'), primary_key=True),
    db.Column('account_id', db.Integer, db.ForeignKey('account.id'), primary_key=True)
)