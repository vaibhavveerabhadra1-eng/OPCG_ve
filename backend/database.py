from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), default="Plant Parent")
    email = db.Column(db.String(120), unique=True)
    bio = db.Column(db.String(500), default="Every plant deserves love and water ☀️")
    avatar = db.Column(db.String(10), default="🧑‍🌾")
    location = db.Column(db.String(100), default="Bengaluru, IN")
    streak = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Notification preferences
    notif_water = db.Column(db.Boolean, default=True)
    notif_weather = db.Column(db.Boolean, default=True)
    notif_growth = db.Column(db.Boolean, default=True)
    notif_motivation = db.Column(db.Boolean, default=True)

    plants = db.relationship("Plant", backref="owner", lazy=True, cascade="all, delete-orphan")
    notifications = db.relationship("Notification", backref="user", lazy=True, cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "bio": self.bio,
            "avatar": self.avatar,
            "location": self.location,
            "streak": self.streak,
            "notif_water": self.notif_water,
            "notif_weather": self.notif_weather,
            "notif_growth": self.notif_growth,
            "notif_motivation": self.notif_motivation,
        }


class Plant(db.Model):
    __tablename__ = "plants"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    pet_name = db.Column(db.String(100), nullable=False)
    plant_name = db.Column(db.String(100), nullable=False)  # Species from guide
    notes = db.Column(db.Text, default="")
    added_date = db.Column(db.Date, default=datetime.utcnow)
    last_watered = db.Column(db.DateTime, nullable=True)
    watered_today = db.Column(db.Boolean, default=False)

    growth_logs = db.relationship("GrowthLog", backref="plant", lazy=True, cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "petName": self.pet_name,
            "plantName": self.plant_name,
            "notes": self.notes,
            "addedDate": self.added_date.isoformat() if self.added_date else None,
            "lastWatered": self.last_watered.isoformat() if self.last_watered else None,
            "wateredToday": self.watered_today,
            "logCount": len(self.growth_logs),
        }


class GrowthLog(db.Model):
    __tablename__ = "growth_logs"

    id = db.Column(db.Integer, primary_key=True)
    plant_id = db.Column(db.Integer, db.ForeignKey("plants.id"), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    note = db.Column(db.Text, default="")
    height = db.Column(db.Float, nullable=True)  # in cm
    photo_url = db.Column(db.String(500), nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "plantId": self.plant_id,
            "date": self.date.isoformat(),
            "note": self.note,
            "height": self.height,
            "photo": self.photo_url,
        }


class Notification(db.Model):
    __tablename__ = "notifications"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    icon = db.Column(db.String(10), default="🔔")
    title = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)
    unread = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "icon": self.icon,
            "title": self.title,
            "msg": self.message,
            "unread": self.unread,
            "time": self._format_time(),
        }

    def _format_time(self):
        from datetime import datetime, timezone

        now = datetime.now(timezone.utc)
        diff = now - self.created_at.replace(tzinfo=timezone.utc)
        minutes = int(diff.total_seconds() / 60)

        if minutes < 1:
            return "Just now"
        elif minutes < 60:
            return f"{minutes} min ago"
        elif minutes < 1440:
            return f"{minutes // 60} hr ago"
        else:
            return self.created_at.strftime("%b %d")
