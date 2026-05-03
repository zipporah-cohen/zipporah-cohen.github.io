import { useEffect, useState } from 'react';
import { LifeListItem } from '../types';

type UseLifeListDataResult = {
    data: LifeListItem[];
    loading: boolean;
    error: string | null;
};

const useLifeListData = (): UseLifeListDataResult => {
    const [data, setData] = useState<LifeListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/data/lifeListData.json');
                if (!response.ok) {
                    throw new Error(`Failed to load life list data (${response.status})`);
                }
                const items: LifeListItem[] = await response.json();
                setData(items);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return { data, loading, error };
};

export default useLifeListData;
