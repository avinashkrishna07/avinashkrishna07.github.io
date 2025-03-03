import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const Skill = ({ id, source, alt, title }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div>
            <img id={`tooltip-${id}`} src={source} alt={alt} title={title} className="skill-image" />
            <Tooltip
                placement="bottom"
                isOpen={tooltipOpen}
                target={`tooltip-${id}`}
                toggle={toggle}
            >
                {title}
            </Tooltip>
        </div>
    );
};

export default Skill;

