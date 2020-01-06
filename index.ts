import {Client} from "pg";

(async () => {
    const client = new Client({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        ssl: process.env.SSL === "true",
    });
    try {
        await client.connect();

        const targets = await client.query(`SELECT id, remote_url FROM media_attachments WHERE remote_url like '${process.env.FROM}%'`);
        const updates = targets.rows.map((row) => {
            let id = row.id;
            if (typeof id === typeof "") {
                id = parseInt(id, 10);
            }
            const remote_url = (row.remote_url || "").replace(process.env.FROM, process.env.TO);

            return client.query(`UPDATE media_attachments SET remote_url = '${remote_url}' WHERE id = ${id}`);
        });
        await Promise.all(updates);
    } catch(e) {
        console.error(e);
    } finally {
        await client.end();
    }
})();