

function getPairNumberFromColor(pair)
        {
        let majorIndex = -1;
        for (let i = 0; i < MajorColorNames.length; i++)
            {
                if (MajorColorNames[i] == pair.majorColor)
                {
                    majorIndex = i;
                    break;
                }
            }

        let minorIndex = -1;
            for (let i = 0; i < MinorColorNames.length; i++)
            {
                if (MinorColorNames[i] == pair.minorColor)
                {
                    minorIndex = i;
                    break;
                }
            }
    
        if (majorIndex == -1 || minorIndex == -1)
            {
                throw `Unknown Colors:${pair.toString()}`;
            }

        return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
	 }
