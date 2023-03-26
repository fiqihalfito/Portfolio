"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Text } from 'recharts';
import { skills } from '@/lib/skills';

function customTick({ payload, x, y, cx, cy, ...rest }) {
    return (
        <Text
            {...rest}
            // verticalAnchor="middle"
            y={y}
            x={x}
            className="text-sm "
        >
            {payload.value}
        </Text>
    );
}

const SkillChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%" >
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills} innerRadius="4%" >
                <PolarGrid gridType='circle' />
                <PolarAngleAxis dataKey="name" tick={customTick} />
                <PolarRadiusAxis angle={55} domain={[0, 100]} />
                <Radar name="Fiqih" dataKey="value" stroke="#b45309" fill="#fbbf24" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default SkillChart