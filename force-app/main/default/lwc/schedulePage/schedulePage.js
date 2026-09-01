import { LightningElement, api, wire } from 'lwc';

export default class SchedulePage extends LightningElement {
    @api projectId;
    @api projectName;

    // We will add mapping validation logic here later
    get isMappingComplete() {
        // TODO: Implement call to Apex to check if mapping exists for this project
        return false; 
    }
}
