import React from "react";

export default function Layout({ children } : {children : React.ReactNode}) {
    return (
        <section>
            <h1>Esto es el layout del Inicio</h1>
            {children}
        </section>
    );
}