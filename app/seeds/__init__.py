from flask.cli import AppGroup
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .ledger import seed_ledger, undo_ledger

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    user = seed_users()
    categories = seed_categories(user)
    ledger = seed_ledger(user, categories)
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_ledger()
    undo_categories()
    undo_users()
    # Add other undo functions here
