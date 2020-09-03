import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DescriptionAbility({url}) {
    const [description, setDescription] = useState('');

    let source = axios.CancelToken.source();
    useEffect(() => {
        axios.get(url, { cancelToken: source.token }).then(result => {
            const desc = result.data.effect_entries.filter(item => item.language.name === "en");
            setDescription(desc[0].short_effect);
        })
    }, [source.token, url]);

    return <p>{description}</p>
}

export default DescriptionAbility;