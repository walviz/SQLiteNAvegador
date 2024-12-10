// Inicializar sql.js
initSqlJs().then(function (SQL) {
    // Crear una base de datos en memoria
    const db = new SQL.Database();

    // Ejecutar comandos SQL
    db.run("CREATE TABLE test (id INTEGER, name TEXT);");
    db.run("INSERT INTO test VALUES (1, 'Alice'), (2, 'Bob');");

    // Consultar datos
    const res = db.exec("SELECT * FROM test;");
    console.log(res);
});
