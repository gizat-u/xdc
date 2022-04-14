import "./ServiceSection.css"

import { Link } from 'react-router-dom';

import ceramicing from "../../assets/videos/ceramicing.mp4";
import cleaning from "../../assets/videos/cleaning.mp4";
import filming from "../../assets/videos/filming.mp4";
import pdr from "../../assets/videos/pdr.mp4";
import polishing from "../../assets/videos/polishing.mp4";
import skining from "../../assets/videos/skining.mp4";
// import Video7 from "../../assets/videos/Washing.mp4";

export default function ServiceSection() {
	return (
		<div className="Component">
			<div className="services">
				<Link to="/ceramic-application" className="service">
					<video autoPlay playsInline loop muted preload="auto" width="100%" src={ceramicing} />
					<div className="service_blackout">
						<h3>Ceramic Application</h3>
					</div>
				</Link>
				<Link to="/dry-cleaning" className="service">
					<video autoPlay playsInline loop muted preload="auto" width="100%" src={cleaning} />
					<div className="service_blackout">
						<h3>Dry Cleaning</h3>
					</div>
				</Link>
				<Link to="/protective-film" className="service">
					<video autoPlay playsInline loop muted preload="auto" width="100%" src={filming} />
					<div className="service_blackout">
						<h3>Applying a Protective Film</h3>
					</div>
				</Link>
				<Link to="/pdr" className="service">
					<video autoPlay playsInline loop muted preload="auto" width="100%" src={pdr} />
					<div className="service_blackout">
						<h3>PDR</h3>
					</div>
				</Link>
				<Link to="/polishing" className="service">
					<video autoPlay playsInline loop muted preload="auto" width="100%" src={polishing} />
					<div className="service_blackout">
						<h3>Polishing</h3>
					</div>
				</Link>
				<Link to="/leather-work" className="service">
					<video autoPlay playsInline loop muted preload="auto" width="100%" src={skining} />
					<div className="service_blackout">
						<h3>Leather work</h3>
					</div>
				</Link>
			</div>
		</div>
	);
}