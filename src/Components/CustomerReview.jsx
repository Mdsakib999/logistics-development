import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerReview = () => {
  const reviewOne = (
    <div className="bg-gray-100 shadow-lg p-6 rounded-2xl min-h-[250px] max-w-sm flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="John Martin"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-800">John Martin</p>
          <p className="text-sm text-gray-500">Acme Inc.</p>
        </div>
      </div>
      <p className="mb-4 text-gray-800 flex-1">
      Nutzen Sie agile Modelle, um eine klare Zusammenfassung der Strategie zu liefern und Zusammenarbeit zu fördern, um das Wertangebot zu stärken. Entwickeln Sie eine ganzheitliche Sicht auf disruptive Innovation durch Arbeitsplatzinklusion und Empowerment.
      </p>
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>
    </div>
  );

  const reviewTwo = (
    <div className="bg-gray-100 shadow-lg p-6 rounded-2xl min-h-[250px] max-w-sm flex flex-col ">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="John Smith"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-black">Kathleen Smith</p>
          <p className="text-sm text-gray-500">Beta Corp.</p>
        </div>
      </div>
      <p className="mb-4 text-black flex-1">
      Setzen Sie flexible Strategien ein, um eine prägnante Zusammenfassung der Strategie zu liefern, ermutigen Sie zu gemeinsamen Anstrengungen, um das Wertangebot zu verbessern. Fördern Sie eine umfassende Sichtweise auf disruptive Innovation durch Inklusion am Arbeitsplatz und die Stärkung der Mitarbeiter.
      </p>
      <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
          <FaStar key={i} className="text-yellow-300" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-6 lg:py-16 container mx-auto">
      <h2 className="text-5xl font-md leading-13 tracking-wider py-8 text-center ">
        Was unsere Kunden sagen
      </h2>

      <div className="max-w-4xl flex flex-col lg:flex-row justify-center items-center mx-auto gap-4 p-4 ">
        {reviewOne}
        {reviewTwo}
      </div>
    </div>
  );
};

export default CustomerReview;
