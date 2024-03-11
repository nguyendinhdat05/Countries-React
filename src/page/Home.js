import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCountries, searchFlag} from "../services/countriesService";

export default function Home() {
    let dispatch = useDispatch();
    let search = useSelector(state => {
        return state.countries.searchCountries
    })
    let countries = useSelector(state => {
        if (search == '' && state.countries.countries != undefined) {
            return state.countries.countries
        } else {
            let x = search.toLocaleLowerCase()
            return state.countries.countries.filter(i => i.name.common.toLocaleLowerCase().includes(x))
        }
    })


    useEffect(() => {
        dispatch(getCountries())
    }, []);
    return (
        <>
            <input type="text" onInput={(e) => {
                dispatch(searchFlag(e.target.value))
            }}/>
            <br/>
            <br/>

            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Flag</th>
                            <th scope="col">Common</th>
                            <th scope="col">Flags</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            countries.map((item, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.flag}</td>
                                    <td>{item.name.common}</td>
                                    <td><img style={{width: 50, height: 50}} src={`${item.flags.svg}`} alt=""/></td>

                                </tr>
                            ))
                        }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}