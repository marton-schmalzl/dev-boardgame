import React from 'react';
import { Person } from '../../model/cards/Person';
import { GameCard } from '../common/GameCard';

interface BackOfficeEmployeeCardProps {
  employee: Person;
}

const BackOfficeEmployeeCard: React.FC<BackOfficeEmployeeCardProps> = ({ employee }) => {
  return (
    <GameCard
      variant="backoffice"
      title={employee.title?.en}
      name={employee.name?.en}
      cost={employee.cost}
      flavorText={employee.flavorText?.en}
      text={employee.text?.en}
      photoSrc={employee.photoSrc}
      imageFolder="images/backoffice"
    // No skills for backoffice
    />
  );
};

export default BackOfficeEmployeeCard;
