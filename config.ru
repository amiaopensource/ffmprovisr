require './config/environment'

use Rack::MethodOverride
use GenerateController
run ApplicationController