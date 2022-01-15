CREATE TABLE if not exists glbartistbio (
    "artistname" TEXT NOT NULL,
    "genre" TEXT,
	"playcount" TEXT,
	"listeners" TEXT,
	"playcountperlistener" TEXT,
	"artistinfo" TEXT,
	"artistlink" TEXT
);
-- drop table if exists glbartistbio;

select * from public.glbartistbio
