import React from 'react';
import { Stats } from '../../model/Stats';
import { Feature } from '../../model/contracts/Contract';
import OutlinedBox from '../ui/OutlinedBox';
import { Card } from '../ui/Card';
import CardHeader from '../common/CardHeader';
import SkillRow from '../common/SkillRow';
import { Icons } from '../../icons';

interface FeatureCardProps {
  feature: Feature;
}

const skillIcons: { [key in keyof Stats]: React.ElementType } = {
  knowledge: Icons.Knowledge,
  organization: Icons.Organization,
  creativity: Icons.Creativity,
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <Card variant="feature">
      {/* Row 1: Header (Spans 2 Columns) */}
      <div className="col-span-2 w-full">
        <CardHeader
          left={
            <div className="bg-feature text-feature-foreground px-2 py-[2px] rounded font-bold">
              {feature.storyPoints}
            </div>
          }
          center={
            <div className="text-xl font-bold text-feature-text truncate">
              {feature.name.en}
            </div>
          }
        />
      </div>

      {/* Row 2 Left: Effect */}
      <div className="row-start-2 col-start-1 flex flex-col min-w-0 min-h-0">
        <OutlinedBox
          label="Effect"
          variant="feature"
          className=""
        >
          <div className="text-sm text-slate-800">
            {feature.effectDescription?.en}
          </div>
        </OutlinedBox>
      </div>

      {/* Row 2 Right: Image */}
      <div className="row-start-2 col-start-2 h-full aspect-square rounded-[5px] overflow-hidden border border-blue-200 min-w-0 min-h-0 bg-white">
        <img
          // Assuming images path relative to public
          src={'images/features/' + feature.photoSrc}
          alt={'Feature Illustration'}
          className="h-full w-full object-cover block"
        />
      </div>

      {/* Row 3 Left: Flavor Text */}
      <div className="row-start-3 col-start-1 flex flex-col min-w-0 min-h-0">
        <OutlinedBox
          label="Flavor Text"
          variant="feature"
          className=""
        >
          <div className="text-xs italic text-gray-600">
            {feature.flavorText?.en || ''}
          </div>
        </OutlinedBox>
      </div>

      {/* Row 3 Right: Required Skills */}
      <div className="row-start-3 col-start-2 flex flex-col justify-center min-w-0 min-h-0">
        <OutlinedBox label="Skills Req." variant="feature" className="flex flex-col justify-center h-full">
          <div className="flex flex-col">
            {Object.entries(feature.requiredSkills).map(([skillName, level]) => (
              <SkillRow
                key={skillName}
                skillName={skillName}
                level={level as number}
                variant="feature"
                icon={skillIcons[skillName as keyof Stats]}
                maxLevel={10}
              />
            ))}
          </div>
        </OutlinedBox>
      </div>

    </Card >
  );
};

export default FeatureCard;
