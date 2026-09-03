import React from 'react';

const HeatMap = () => {
    // Function to generate random activity for the contribution graph
    const generateActivity = (startDate, endDate) => {
        const data = [];
        let currentDate = new Date(startDate);
        const end = new Date(endDate);

        while (currentDate <= end) {
            const count = Math.floor(Math.random() * 50);
            data.push({
                date: currentDate.toISOString().split('T')[0],
                count: count,
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return data;
    };

    const contributions = generateActivity('2026-01-01', '2026-04-30');

    // Helper to determine box background color based on contribution count
    const getBoxColor = (count) => {
        if (count === 0) return '#161b22';
        if (count < 15) return '#0e4429';
        if (count < 30) return '#006d32';
        if (count < 45) return '#26a641';
        return '#39d353';
    };

    return (
        <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '16px', color: '#c9d1d9' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>
                Recent Contributions
            </div>

            {/* Heatmap Layout Container */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                
                {/* Month Labels Row */}
                <div style={{ display: 'flex', fontSize: '10px', color: '#8b949e', paddingLeft: '28px', gap: '32px' }}>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                </div>

                {/* Main Content with Days Labels and Grid */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    
                    {/* Days Labels Column (Sun, Mon, Tue...) */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#8b949e', height: '100px', paddingRight: '4px' }}>
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                    </div>

                    {/* Contribution Grid Boxes */}
                    <div style={{ display: 'grid', gridTemplateRows: 'repeat(7, 10px)', gridAutoFlow: 'column', gap: '3px' }}>
                        {contributions.map((item, index) => (
                            <div
                                key={index}
                                title={`${item.count} contributions on ${item.date}`}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    backgroundColor: getBoxColor(item.count),
                                    borderRadius: '2px',
                                    border: '1px solid rgba(27, 31, 36, 0.06)'
                                }}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeatMap;