import sqlite3 #bibliotēkas pieslēgšana

#pieslēgt DB
db=sqlite3.connect(':memory')
sql=db.cursor()

sql.execute(""""CREATE TABLE lietotaaji(

            id INTEGER NOT NULL UNIQUE,
            vaards TEXT,
            laiks INTEGER,
            punkti INTEGER,
            klikski INTEGER,
            datums TEXT,
            PRYMERY KEY ("id" AUTOINCREMENT)
)
            
            """ )
sql.execute("SELECT * FROM lietotaaji")

rezultaats=sql.fetchall()
sql.execute("INSERT INTO lietotaaji (vaards, punkti") VALUES ('Māris',20)")
print(rezultaats)

#aiztaisam
db.close()