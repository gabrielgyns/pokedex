import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DescriptionAbility({url}) {
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(url).then(result => {
            const desc = result.data.effect_entries.filter(item => item.language.name === "en");
            setDescription(desc[0].short_effect);
        })
    }, [url]);

    return <p>{description}</p>
}

export default DescriptionAbility;