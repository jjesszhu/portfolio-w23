import React from 'react';
import "./FilmDiary.css"

const FilmEntry = ({
    title,
    poster,
    watchDate
}) => {
    return (
        <div className="film-entry-container">
            <img
                className="film-poster"
                src={poster}
                alt={`${title} poster`}
                loading="lazy"
            />
            <div className="film-detail-container">
                <p className="film-title">{title}</p>
                <p className='watch-date'>{watchDate}</p>
            </div>
        </div>
    );
};

const FilmDiary = ({
    title = "film diary",
    filmList
}) => {
    return (
        <>
            <h3 className="film-diary-title">{title}</h3>
            <div className="film-diary">
                {filmList?.map((entry, index) => {
                    const date = new Date(entry.date.watched).toDateString();
                    return (<FilmEntry
                        key={index}
                        title={entry.film.title.toUpperCase()}
                        poster={entry.film.image.small}
                        watchDate={date}
                    />);
                })} 
            </div>
        </>
    );
};



export default FilmDiary;