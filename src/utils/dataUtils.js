export const filterActivityData = (data, filter) => {
    return data.filter(activity =>
        activity.type.toLowerCase().includes(filter.toLowerCase())
    );
};

export const sortActivityData = (data, key, direction) => {
    return data.sort((a, b) => {
        const keyA = a[key];
        const keyB = b[key];

        if (keyA < keyB) {
            return direction === 'ascending' ? -1 : 1;
        }
        if (keyA > keyB) {
            return direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });
};