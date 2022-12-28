import { Badge, Table } from 'antd';
const Expander = (dt) => {
    console.log("moo", dt);
    const dataModelInfo = [];
    const dataStatistics = [];
    const expandedRowRender = () => {
        const columnsStatistics = [
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Status',
                key: 'state',
                render: () => <Badge status="success" text="Finished" />,
            },
            {
                title: 'Upgrade Status',
                dataIndex: 'upgradeNum',
                key: 'upgradeNum',
            },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
            },
        ];
        for (let i = 0; i < 3; ++i) {
            dataStatistics.push({
                key: i.toString(),
                date: '2014-12-24 23:12:00',
                name: 'This is production name',
                upgradeNum: 'Upgraded: 56',
            });
        }
        return <Table columns={columnsStatistics} dataSource={dataStatistics} pagination={false} />;
    };
    const columnsModelInfo = [
        {
            title: 'Model Name',
            dataIndex: 'modelname',
            key: 'modelname',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'PassThreshold',
            dataIndex: 'passthreshold',
            key: 'passthreshold',
        },
        {
            title: 'FailThreshold',
            dataIndex: 'failthreshold',
            key: 'failthreshold',
        },
    ];
    if (dt) {
        dt.dt[0].InfoModel.map((value, index) => {
            return (
                dataModelInfo.push({
                    key: index,
                    modelname: value.ModelName,
                    date: value.ModelDate,
                    passthreshold: value.PassThreshold,
                    failthreshold: value.FailThreshold
                })
            )
        })
    }

    return (
        <div className="tableStas">
            <Table
                columns={columnsModelInfo}
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                dataSource={dataModelInfo}
                size="small"
                scroll={{ x: 400, y: 500 }}
            />
        </div>
    );
};
export default Expander;