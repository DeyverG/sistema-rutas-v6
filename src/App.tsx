import React from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import { Navbar } from './Components/Navbar/Navbar';
import PrivateRoute from './routes/PrivateRoutes';

function App() {
  // Replace no permite darle para atras a la ruta.
  return (
    <div className="App App-header">
      <h1 className='text-primary-base text-huge'>Welcome to React Router V6!</h1>
      <Navbar />
      <Routes>
        {routes.map(({ path, Component, private: privateRoute }) =>
        (
          privateRoute
            ?
            <Route path={path} element={<PrivateRoute> <Component /> </PrivateRoute>} key={path}/>
            :
            <Route path={path} element={<Component />} key={path}/>

        )
        )}
        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </div>
  );
}

export default App;
