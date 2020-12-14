from app.models import db, Ledger


def seed_ledger(user, categories):  
    ledgers = [
        Ledger(name='Electricity', transaction_type='CRE', amount=239.65, user_id=user.id,
        category_id=categories[0].id,),
        Ledger(name='Gas', transaction_type='CRE', amount=143.34, user_id=user.id, category_id=categories[0].id),
        Ledger(name='PS5', transaction_type='CRE', amount=670.23, user_id=user.id, category_id=categories[1].id),
        Ledger(name='Frisbee Golf Discs', transaction_type='CRE', amount=23.39, user_id=user.id, category_id=categories[1].id),
        Ledger(name='Costco Run', transaction_type='CRE', amount=432.97, user_id=user.id, category_id=categories[2].id)
    ]

    db.session.add_all(ledgers)
    db.session.commit()
    return ledgers


def undo_ledger():
    db.session.execute('TRUNCATE ledger CASCADE;')
    db.session.commit()
