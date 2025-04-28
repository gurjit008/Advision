
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  LayoutGrid, 
  LayoutPanelLeft,
  LayoutPanelTop,
  LayoutTemplate,
  Columns2
} from 'lucide-react';

const productsData = [
  {
    id: 1,
    name: "VeivaAnalytics",
    icon: <LayoutDashboard className="w-10 h-10 text-veiva-purple" />,
    description: "Our flagship analytics platform that transforms raw data into actionable business insights through advanced AI algorithms.",
    features: [
      "Real-time data processing",
      "Interactive dashboards",
      "Predictive analytics",
      "Customizable reports",
      "Seamless integration with existing systems",
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "VeivaPredict",
    icon: <LayoutGrid className="w-10 h-10 text-veiva-purple" />,
    description: "A machine learning solution that forecasts business trends and predicts future outcomes based on historical data patterns.",
    features: [
      "Advanced forecasting models",
      "Scenario analysis",
      "Anomaly detection",
      "Risk assessment",
      "Trend identification",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "VeivaOptimize",
    icon: <LayoutPanelLeft className="w-10 h-10 text-veiva-purple" />,
    description: "An operations optimization tool that streamlines processes and identifies efficiency opportunities using AI algorithms.",
    features: [
      "Process automation",
      "Resource allocation",
      "Cost optimization",
      "Performance tracking",
      "Bottleneck identification",
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "VeivaInsight",
    icon: <LayoutPanelTop className="w-10 h-10 text-veiva-purple" />,
    description: "A customer intelligence platform that provides deep insights into customer behavior, preferences, and satisfaction.",
    features: [
      "Sentiment analysis",
      "Customer segmentation",
      "Behavior prediction",
      "Personalization engine",
      "Feedback analytics",
    ],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "VeivaIntegrate",
    icon: <LayoutTemplate className="w-10 h-10 text-veiva-purple" />,
    description: "A data integration platform that connects and unifies data from multiple sources for comprehensive analysis.",
    features: [
      "Seamless data connectors",
      "Automated data cleaning",
      "ETL processes",
      "Real-time synchronization",
      "Data governance tools",
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "VeivaAutomate",
    icon: <Columns2 className="w-10 h-10 text-veiva-purple" />,
    description: "An AI-powered automation solution that streamlines repetitive tasks and workflows across your organization.",
    features: [
      "Workflow automation",
      "Document processing",
      "Decision support",
      "Intelligent scheduling",
      "Task prioritization",
    ],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800"
  }
];

const ProductsList = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12">
          {productsData.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-64 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <div className="flex items-center mb-4">
                    <div className="bg-veiva-lightgray p-3 rounded-lg mr-4">
                      {product.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-veiva-blue">{product.name}</h3>
                  </div>
                  <p className="text-veiva-gray mb-6">{product.description}</p>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${expandedId === product.id ? 'max-h-96' : 'max-h-0'}`}>
                    <h4 className="font-semibold text-veiva-blue mb-3">Key Features:</h4>
                    <ul className="list-disc pl-5 mb-6 text-veiva-gray">
                      {product.features.map((feature, index) => (
                        <li key={index} className="mb-1">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <Button 
                      variant="outline" 
                      className="text-veiva-purple border-veiva-purple hover:bg-veiva-purple/10"
                      onClick={() => toggleExpand(product.id)}
                    >
                      {expandedId === product.id ? 'Show Less' : 'Learn More'}
                    </Button>
                    <Button className="btn-primary">Request Demo</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
