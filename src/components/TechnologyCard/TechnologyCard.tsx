import React from 'react';
import { Stats } from '../../model/Stats';
import { Technology } from '../../model/contracts/Contract';
import { Card } from '../ui/Card';
import OutlinedBox from '../ui/OutlinedBox';
import CardHeader from '../common/CardHeader';
import SkillBar from '../common/SkillBar';

interface TechnologyCardProps {
  technology: Technology;
}

const skillIcons: { [key in keyof Stats]: string } = {
  knowledge: '⚙️',
  organization: '📋',
  creativity: '💡',
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
  return (
    <Card variant="tech">
      {/* Row 1: Header (Spans 2 Columns) */}
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
                  🌐
                </span>{' '}
                {technology.openSourcePrestige}
              </div>
            ) : null
          }
        />
      </div>

      {/* Row 2 Left: Top Effect */}
      <div className="row-start-2 col-start-1 flex flex-col min-w-0 min-h-0">
        <OutlinedBox label="Top Effect" variant="tech" className="">
          <div className="text-sm text-slate-800">
            {technology.topDescription?.en || ''}
          </div>
        </OutlinedBox>
      </div>

      {/* Row 2 Right: Image */}
      <div className="row-start-2 col-start-2 h-full aspect-square rounded-[5px] overflow-hidden border border-blue-200 min-w-0 min-h-0 bg-white">
        <img
          src={'images/technology/' + technology.photoSrc}
          alt={'Technology Illustration'}
          className="h-full w-full object-cover block"
        />
      </div>

      {/* Row 3 Left: Bottom Effect */}
      <div className="row-start-3 col-start-1 flex flex-col min-w-0 min-h-0">
        <OutlinedBox label="Bottom Effect" variant="tech" className="">
          <div className="text-sm text-slate-800">
            {technology.bottomDescription?.en || ''}
          </div>
        </OutlinedBox>
      </div>

      {/* Row 3 Right: Skills */}
      <div className="row-start-3 col-start-2 flex flex-col justify-center min-w-0 min-h-0">
        <div className="flex flex-col justify-center h-full">
          <label className="text-xs font-bold text-slate-500 mb-[5px] block">Required Skills</label>
          <div className="flex flex-col">
            {Object.entries(technology.requiredSkills).map(
              ([skillName, level]) => (
                <div className="flex items-center" key={skillName}>
                  <div className="w-[30px] flex items-center justify-center">
                    <span className="text-base text-slate-600">
                      {skillIcons[skillName as keyof Stats]}
                    </span>
                  </div>
                  <SkillBar level={level as number} maxLevel={10} variant="tech" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TechnologyCard;
