import React from 'react';
import './App.css';
import { employees } from "./data/employees";
import { backoffice } from "./data/employees";
import { items } from "./data/items";
import { tecnical_contracts } from "./data/tecnical_contracts";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import ItemCard from './components/ItemCard/ItemCard';
import BackOfficeEmployeeCard from './components/BackOfficeEmployeeCard/BackOfficeEmployeeCard';
import TechnologyCard from './components/TechnologyCard/TechnologyCard';
import { functional_contracts } from './data/functional_contracts';
import FeatureCard from './components/FeatureCard/FeatureCard';

// function App() {
//     return (
//         <div className="App">
//             {employees.map(e => <EmployeeCard employee={e}/>)}
//             <br/>
//             {generic_cards.map(e => <EmployeeCard employee={e}/>)}
//         </div>
//     );
// }



const App: React.FC = () => (
    <div className='wrapper'>
        <section>
            {employees.map((e, index) => <EmployeeCard key={e.name?.en || index} employee={e} />)}
        </section>
        <section>
            {backoffice.map((e, index) => <BackOfficeEmployeeCard key={e.name?.en || index} employee={e} />)}
        </section>
        <section>
            {items.map((e, index) => <ItemCard key={e.name?.en || index} item={e} />)}
        </section>
        <section>
            {tecnical_contracts.map((e, index) => <TechnologyCard key={e.name?.en || index} technology={e} />)}
        </section>
        <section>
            {functional_contracts.map((e, index) => <FeatureCard key={e.name?.en || index} feature={e} />)}
        </section>
    </div>
);

export default App;
