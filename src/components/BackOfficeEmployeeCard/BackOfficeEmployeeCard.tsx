import React from 'react';
import { Person } from '../../model/cards/Person';
import { GameCard } from '../common/GameCard';
import CardHeader from '../common/CardHeader';
import CostDisplay from '../common/CostDisplay';
import OutlinedBox from '../ui/OutlinedBox';
import AbilityBox from '../common/AbilityBox';
import CardMetaBadges from '../common/CardMetaBadges';

interface BackOfficeEmployeeCardProps {
  employee: Person;
}

const BackOfficeEmployeeCard: React.FC<BackOfficeEmployeeCardProps> = ({ employee }) => {
  const variant = "backoffice";
  const imageFolder = "images/backoffice";

  return (
    <GameCard variant={variant}>
      <CardMetaBadges candidate={employee.candidate} notes={employee.notes} />
      {/* Header */}
      <div className="w-full">
        <CardHeader
          left={employee.title?.en && (
            <div className="text-lg font-bold leading-tight truncate" style={{ color: `var(--color-${variant}-text)` }}>
              {employee.title.en}
            </div>
          )}
          right={<CostDisplay cost={employee.cost} />}
        />
      </div>

      {/* Main Content: Flavor & Photo */}
      <div className="grid grid-cols-2 gap-2 flex-shrink-0">
        {/* Flavor Text */}
        <div className="min-w-0 h-full">
          <OutlinedBox label="Description" variant={variant} className="h-full">
            <div className="mb-2">
              <div className="text-sm font-bold opacity-80 leading-tight" style={{ color: `var(--color-${variant}-text)` }}>
                {employee.name?.en}
              </div>
            </div>
            <div className="text-[10px] italic text-slate-800">
              {employee.flavorText?.en}
            </div>
          </OutlinedBox>
        </div>

        {/* Photo */}
        <div className={`w-full aspect-square rounded-[5px] overflow-hidden border border-${variant}-border bg-white flex items-center justify-center`}>
          {employee.photoSrc && (
            <img
              src={`${imageFolder}/${employee.photoSrc}`}
              alt={variant}
              className="w-full h-full object-contain block"
            />
          )}
        </div>
      </div>

      {/* Abilities */}
      <AbilityBox text={employee.text?.en} variant={variant} />

      {/* No Skills for backoffice */}
    </GameCard>
  );
};

export default BackOfficeEmployeeCard;
