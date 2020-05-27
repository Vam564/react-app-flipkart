import React from 'react'

const MainContent = ({movieList}) => {
    return (
        <>
            {movieList.map(({ Title, Year, imdbID, Poster, Type }) => (
                <div className="col-4   mb-5 ">
                    <div class="card shadow" style={{ width: '14rem' } }>
                        <img width="" height="250" class="card-img-top" src={Poster.length==3 ? ("https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif") : (Poster)} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">{Title}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>Year :</b>{Year}</li>
                            <li class="list-group-item"><b>IMDB Id :</b>{imdbID}</li>
                            <li class="list-group-item"><b>Type :</b>{Type}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MainContent
