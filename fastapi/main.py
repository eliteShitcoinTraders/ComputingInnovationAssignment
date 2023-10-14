from fastapi import FastAPI, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from fastapi.responses import HTMLResponse
import mysql.connector

app = FastAPI()

origins = ["*"]

# MySQL database connection configuration
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "123456789", #password needs to be changed
    "database": "nft_site"
}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Asset(BaseModel):
    Asset_ID: int
    category_ID: int
    Name: str
    Mint_state: int
    Img_Url: str
    Price: float
    Mint_Price: float

@app.get("/cars/")
def get_assets():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all assets)
        query = "SELECT * FROM nft_site.asset WHERE category_ID = 2 ORDER BY Asset_ID"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows    
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        assets = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return assets

    except Exception as e:
        return {"error": str(e)}


@app.get("/productsearch/{Asset_ID}")
def get_assets(Asset_ID: str):
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data based on the provided Asset_ID
        query = f"SELECT * FROM nft_site.asset WHERE Asset_ID = {Asset_ID} ORDER BY Asset_ID"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows    
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        assets = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return assets

    except Exception as e:
        return {"error": str(e)}


@app.get("/category/{Category_ID}")
def get_assets(Category_ID: str):
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data based on the provided Asset_ID
        query = f"SELECT category FROM nft_site.category WHERE category_ID = {Category_ID}"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows    
        result = cursor.fetchall()



        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return result

    except Exception as e:
        return {"error": str(e)}


@app.get("/yoda/")
def get_assets():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all assets)
        query = "SELECT * FROM nft_site.asset WHERE category_ID = 1 ORDER BY Asset_ID"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows    
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        assets = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return assets

    except Exception as e:
        return {"error": str(e)}

@app.get("/assets/")
def get_assets():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all assets)
        query = "SELECT * FROM nft_site.asset ORDER BY Asset_ID"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows    
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        assets = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return assets

    except Exception as e:
        return {"error": str(e)}

@app.get("/animals/")
def get_assets():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all assets)
        query = "SELECT * FROM nft_site.asset WHERE category_ID = 3 ORDER BY Asset_ID"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows    
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        assets = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return assets

    except Exception as e:
        return {"error": str(e)}

@app.get("/Allcategory/")
def get_assets():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all assets)
        query = "SELECT category FROM nft_site.category"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows    
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        assets = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return assets

    except Exception as e:
        return {"error": str(e)}





@app.get("/search/")
def search_assets(category: int =  None, query: str = None):
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the base SQL query to retrieve data
        query_sql = "SELECT * FROM nft_site.asset WHERE 1"

        # Add conditions based on category and query parameters if they are provided
        if category is not None:
            query_sql += f" AND category_ID = {category+1}"

        if query is not None:
            query_sql += f" AND Name LIKE '%{query}%'"

        # Order the results by Asset_ID
        query_sql += " ORDER BY Asset_ID"

        print("Generated SQL Query:", query_sql)
        print("Category:", category)
        print("Query:", query)
        # Execute the SQL query
        cursor.execute(query_sql)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        assets = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return assets

    except Exception as e:
        return {"error": str(e)}

