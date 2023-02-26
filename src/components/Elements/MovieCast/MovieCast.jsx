import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router';
import { requestCastById } from 'api/api';
import Loader from 'components/Elements/Loader/Loader';

export default function MovieCast() {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    requestCastById(movieId)
      .then(data => {
        setMovieCast(data.cast);
        // console.log(data.cast);
      })
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <div>
      {movieCast.length > 0 ? (
        movieCast.map(({ character, profile_path, name, index }) => {
          return (
            <ul key={nanoid()}>
              <li>
                {profile_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={`Actor ${name}`}
                  />
                ) : (
                  <img
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                    alt="no img"
                    width="200"
                  />
                )}
              </li>
              <li>{name}</li>
              <li>Character: {character}</li>
            </ul>
          );
        })
      ) : (
        <div>We have no information about cast in this movie</div>
      )}

      {loading && <Loader />}
      {error && <div>Oops, some error occured... Message:{error}</div>}
    </div>
  );
}
