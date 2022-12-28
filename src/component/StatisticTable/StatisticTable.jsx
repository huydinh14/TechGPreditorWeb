import { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import Expander from '../Expander/Expander';
import axios from 'axios';
const App = () => {
    const [statistic, setStatistic] = useState([]);
    const [loading, setLoading] = useState(true);
    const data = [];
    const tempHashKey = "";

    const handleLoadingChange = (enable) => {
        setLoading(enable);
    };

    const tableProps = {
        loading
    }

    useEffect(() => {
        const test = async () => {
            const response = await axios.get('https://localhost:7069/api/ModelGP/GetStatistics');
            if (response !== null) {
                setStatistic(response.data);
                setLoading(false);
            }
        }
        test();
    }, [])

    const expandedRowRender = () => {
        return <Expander dt={statistic} hashkey={statistic.} />
    };
    const columns = [
        {
            title: 'ModelGP Hashkey',
            dataIndex: 'hashkey',
            key: 'hashkey',
            render: (text) => (
                <>
                    <Tag color="green">
                        {text}
                    </Tag>
                </>
            ),
        },
        {
            title: 'All ClassNames',
            dataIndex: 'allClassName',
            key: 'allClassName',
        },
    ];

    if (!loading) {
        statistic.map((value, index) => {
            return (
                data.push({
                    hashkey: value.ModelGPHashKey,
                    allClassName: value.AllClassNames,
                    key: value.ModelGPHashKey.toString(),
                    // name: 'Screen',
                    // platform: 'iOS',
                    // version: '10.3.4.5654',
                    // upgradeNum: 500,
                    // creator: 'Jack',
                    // createdAt: '2014-12-24 23:12:00',
                })
            )
        })
    }

    return (
        <div className="stas">
            <Table
                {...tableProps}
                columns={columns}
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
                size="small"
                scroll={{ x: 400, y: 500 }}
            />
        </div>
    );
};
export default App;