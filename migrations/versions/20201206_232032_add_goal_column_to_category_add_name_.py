"""add goal column to category. add name column to ledger

Revision ID: 103bce3da3cc
Revises: b55b22856ff1
Create Date: 2020-12-06 23:20:32.999086

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '103bce3da3cc'
down_revision = 'b55b22856ff1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('categories', sa.Column('goal', sa.Numeric(precision=10, scale=2), nullable=True))
    op.add_column('ledger', sa.Column('name', sa.String(length=50), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('ledger', 'name')
    op.drop_column('categories', 'goal')
    # ### end Alembic commands ###