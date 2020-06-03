import React from 'react'

const InfoOne = props => {
    return (
        <div>
            <strong>Stay away from people who are coughing or sneezing.</strong>
            <p className="pt-2">Since COVID-19 is a respiratory infection, coughing and sneezing are common symptoms. Additionally, coughing and sneezing both release the virus into the air, so they may increase your risk of infection. Keep your distance from people who appear to have symptoms of an upper respiratory infection.</p>
            <p className="pt-2">• If it’s appropriate, ask the person to stay away from you. You could say, “I noticed you were coughing. I hope you feel better soon, but please keep your distance from me so I don’t get sick.”</p>
            <p>• If you know someone that has been around sick people, it’s a good idea to distance yourself from them, too. You never know if that person got sick.</p>
        </div>
        
    )
}
const InfoTwo = props => {
    return (
        <div>
            <strong><a href="https://www.wikihow.com/Wash-Your-Hands" alt="linktowash" target="_blank" className="no-underline hover:underline text-blue-500">Wash your hands with soap and water</a> to minimize your infection risk.</strong>
            <p className="pt-2">The best way to prevent COVID-19 is to wash your hands as often as possible. Wet your hands with warm water, then apply a mild soap. Work the soap into a lather for 20-30 seconds, then rinse your hands clean under warm running water. This is about how long it takes to sing the "Happy Birthday" song to yourself twice, so pretend you're celebrating someone's birthday.</p>
            <p className="pt-2">• Always wash your hands before you eat or drink anything. However, it’s also best to wash your hands anytime you’re out in public or after you’re around someone you suspect may be sick.</p>
            <p>• If you can't wash your hands, use a hand sanitizer that contains 60-95% alcohol. Alcohol percentages higher than 95% are actually less effective.</p>
        </div>
        
    )
}
const InfoThree = props => {
    return (
        <div>
            <strong>Wear a cloth mask or cover over your nose and mouth when in public.</strong>
            <p className="pt-2">The CDC recommends even healthy people in the US wear cloth coverings when expecting to encounter others in public, like when you are going to the grocery store or using public transportation. Face coverings are NOT a replacement for social distancing!</p>
            <p className="pt-2">• Do not use disposable facemasks meant for healthcare workers or sick people.</p>
            <p>• Cloth face coverings are meant to help prevent transmission of the virus from carriers who have no symptoms.</p>
            <p>• You may want to <a href="https://www.wikihow.com/Sew-a-Simple-Medical-Mask" alt="linktosew" target="_blank" className="no-underline hover:underline text-blue-500">sew a simple cloth mask</a> yourself.</p>
            <p>• In other countries, consult with your local health authority on whether cloth masks or other protective equipment is recommended for your area.</p>
        </div>
        
    )
}

export {InfoOne, InfoTwo, InfoThree}