import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const UptimeGraph = () => {
  // Generate realistic uptime data points
  const generateDataPoints = () => {
    const points = [];
    let baseValue = 99.5;
    
    for (let i = 0; i < 50; i++) {
      // Add some realistic variation
      const variation = (Math.random() - 0.5) * 0.8;
      baseValue = Math.max(98.5, Math.min(100, baseValue + variation));
      points.push({
        x: i * 2,
        y: baseValue,
        timestamp: new Date(Date.now() - (49 - i) * 60 * 60 * 1000).toISOString()
      });
    }
    return points;
  };

  const dataPoints = generateDataPoints();
  const currentUptime = dataPoints[dataPoints.length - 1].y;
  const previousUptime = dataPoints[dataPoints.length - 2].y;
  const trend = currentUptime > previousUptime;

  // Create SVG path for the line
  const createPath = (points: typeof dataPoints) => {
    const maxY = 100;
    const minY = 98;
    const height = 200;
    const width = 100;

    return points
      .map((point, index) => {
        const x = (point.x / (points.length - 1)) * width;
        const y = height - ((point.y - minY) / (maxY - minY)) * height;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  // Create gradient area path
  const createAreaPath = (points: typeof dataPoints) => {
    const path = createPath(points);
    const lastPoint = points[points.length - 1];
    const firstPoint = points[0];
    const height = 200;
    const width = 100;
    
    const lastX = ((lastPoint.x) / (points.length - 1)) * width;
    const firstX = 0;
    
    return `${path} L ${lastX} ${height} L ${firstX} ${height} Z`;
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Uptime Performance</h3>
          <p className="text-gray-400">Last 48 hours</p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-3xl font-bold text-white">
              {currentUptime.toFixed(2)}%
            </span>
            {trend ? (
              <TrendingUp className="h-6 w-6 text-green-400" />
            ) : (
              <TrendingDown className="h-6 w-6 text-red-400" />
            )}
          </div>
          <div className={`text-sm ${trend ? 'text-green-400' : 'text-red-400'}`}>
            {trend ? '+' : ''}{(currentUptime - previousUptime).toFixed(3)}%
          </div>
        </div>
      </div>

      {/* Graph Container */}
      <div className="relative h-64 bg-gray-800 rounded-xl p-4 border border-gray-600">
        <svg
          viewBox="0 0 100 200"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="10" height="20" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          
          <rect width="100" height="200" fill="url(#grid)" />
          
          {/* Area fill */}
          <path
            d={createAreaPath(dataPoints)}
            fill="url(#areaGradient)"
          />
          
          {/* Main line */}
          <path
            d={createPath(dataPoints)}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="0.8"
            className="drop-shadow-sm"
          />
          
          {/* Data points */}
          {dataPoints.map((point, index) => {
            if (index % 5 === 0) { // Show every 5th point to avoid clutter
              const x = (point.x / (dataPoints.length - 1)) * 100;
              const y = 200 - ((point.y - 98) / (100 - 98)) * 200;
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="1"
                  fill="#3B82F6"
                  className="drop-shadow-sm"
                />
              );
            }
            return null;
          })}
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 -ml-8">
          <span>100%</span>
          <span>99.5%</span>
          <span>99%</span>
          <span>98.5%</span>
          <span>98%</span>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-400 -mb-6">
          <span>48h ago</span>
          <span>24h ago</span>
          <span>Now</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-700">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400 mb-1">99.98%</div>
          <div className="text-sm text-gray-400">7-day average</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400 mb-1">247ms</div>
          <div className="text-sm text-gray-400">Avg response</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400 mb-1">0</div>
          <div className="text-sm text-gray-400">Incidents</div>
        </div>
      </div>
    </div>
  );
};

export default UptimeGraph;