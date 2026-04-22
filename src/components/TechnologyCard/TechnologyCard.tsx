import React from 'react';
import { Stats } from '../../model/Stats';
import { Technology } from '../../model/contracts/Contract';
import { Card } from '../ui/Card';
import OutlinedBox from '../ui/OutlinedBox';
import CardHeader from '../common/CardHeader';
import SkillRow from '../common/SkillRow';
import { Icons } from '../../icons';

interface TechnologyCardProps {
  technology: Technology;
}

const skillIcons: { [key in keyof Stats]: React.ElementType } = {
  knowledge: Icons.Knowledge,
  organization: Icons.Organization,
  creativity: Icons.Creativity,
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
  const imgSrc =
    technology.photoSrc && String(technology.photoSrc).trim()
      ? `images/technology/${technology.photoSrc}`
      : '';

  return (
    <Card variant="tech">
      <div className="col-span-2 w-full">
        <CardHeader
          left={
            <div className="bg-tech text-tech-foreground px-2 py-[2px] rounded font-bold inline-block">
              {technology.storyPoints}
            </div>
          }
          center={
            <div className="text-xl font-bold text-tech-text truncate">
              {technology.name.en}
            </div>
          }
          right={
            technology.openSourcePrestige ? (
              <div className="text-tech-text font-bold flex items-center gap-1">
                <span role="img" aria-label="Open Source Prestige">
                  <Icons.Prestige size={16} />
                </span>{' '}
                {technology.openSourcePrestige}
              </div>
            ) : null
          }
        />
      </div>

      <div className="row-span-2 row-start-2 col-start-1 flex min-h-0 min-w-0 flex-col gap-1">
        <OutlinedBox label="Top Effect" variant="tech" className="min-h-0 flex-1">
          <div className="text-sm text-slate-800">
            {technology.topDescription?.en || ''}
          </div>
        </OutlinedBox>
        <OutlinedBox label="Bottom Effect" variant="tech" className="min-h-0 flex-1">
          <div className="text-sm text-slate-800">
            {technology.bottomDescription?.en || ''}
          </div>
        </OutlinedBox>
      </div>

      <div className="row-start-2 col-start-2 h-full aspect-square rounded-[5px] overflow-hidden border border-blue-200 min-w-0 min-h-0 bg-white">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={typeof technology.name.en === 'string' ? technology.name.en : ''}
            className="h-full w-full object-cover block"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 p-1 text-center text-[10px] text-slate-500">
            No illustration
          </div>
        )}
      </div>

      <div className="row-start-3 col-start-2 flex flex-col justify-center min-w-0 min-h-0">
        <div className="flex flex-col justify-center h-full">
          <label className="text-xs font-bold text-slate-500 mb-[5px] block">
            Required Skills
          </label>
          <div className="flex flex-col">
            {Object.entries(technology.requiredSkills).map(
              ([skillName, level]) => (
                <SkillRow
                  key={skillName}
                  skillName={skillName}
                  level={level as number}
                  variant="tech"
                  icon={skillIcons[skillName as keyof Stats]}
                  maxLevel={10}
                />
              )
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TechnologyCard;
