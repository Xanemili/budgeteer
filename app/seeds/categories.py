from app.models import db, Category


def seed_categories(user):
    categories = [
        Category(name='Utilities', user_id=user.id, goal=1000),
        Category(name='Misc', user_id=user.id, goal=300),
        Category(name='Food', user_id=user.id, goal=500),
        Category(name='Subscriptions', user_id=user.id, goal=100)
        ]

    db.session.add_all(categories)
    db.session.commit()
    return categories


def undo_categories():
    db.session.execute('TRUNCATE categories CASCADE;')
    db.session.commit()