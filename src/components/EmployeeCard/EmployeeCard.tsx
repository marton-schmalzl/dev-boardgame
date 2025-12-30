import React from 'react';
import { Programmer } from '../../model/cards/Person';
import { GameCard } from '../common/GameCard';

interface EmployeeCardProps {
    employee: Programmer;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
    return (
        <GameCard
            variant="employee"
            title={employee.title?.en}
            name={employee.name?.en}
            cost={employee.cost}
            flavorText={employee.flavorText?.en}
            text={employee.text?.en}
            photoSrc={employee.photoSrc}
            imageFolder="images/product_team"
            skills={employee.skills}
            filterSkills={false}
        />
    );
};

export default EmployeeCard;
