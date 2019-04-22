import { run } from './app/app';
import { AlertService } from './app/alertService';
import { ComponentService } from './app/componentService';

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
