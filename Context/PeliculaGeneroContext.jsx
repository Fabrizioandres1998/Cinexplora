import { createContext, useContext, useState } from 'react';

const PeliculaGeneroContext = createContext();

export const PeliculaGeneroProvider = ({ children }) => {
    const [peliculaGenero, setPeliculaGenero] = useState(null);

    const setPeliculaGeneroContext = (peliculaGeneroData) => {
        setPeliculaGenero(peliculaGeneroData);
    };

    return (
        <PeliculaGeneroContext.Provider value={{ peliculaGenero, setPeliculaGenero: setPeliculaGeneroContext }}>
            {children}
        </PeliculaGeneroContext.Provider>
    );
};

export const usePeliculaGenero = () => {
    return useContext(PeliculaGeneroContext);
};
