import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    /**
     * El Hook useMemo va a ejecutar la funcion de callBack getHeroById(id), cuando cambie una de sus dependencias, que para este caso es el [id]
     */
    const hero = useMemo( () => getHeroById(id), [id] );

    const onNavigateBack = () => {
        if (hero) {
            const to = hero.publisher === 'DC Comics' ? '/dc' : '/marvel';
            navigate(to);
        }
    }

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${hero.id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b>{hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b>{hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3"> Characteres</h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
