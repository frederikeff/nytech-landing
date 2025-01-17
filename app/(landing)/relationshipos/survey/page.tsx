// app/relationship-os/survey/page.tsx
import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const metadata: Metadata = {
  title: 'RelationshipOS Survey',
  description: 'Help us understand your CRM needs and pain points',
}

const roles = [
  'Sales Representative',
  'Sales Manager',
  'Business Development',
  'Account Executive',
  'Customer Success',
  'SalesOps',
  'RevOps',
  'Relationship Manager',
  'Chief Revenue Officer',
  'Other'
]

const industries = [
  'Professional Services',
  'Technology/SaaS',
  'Financial Services',
  'Consulting',
  'Other'
]

const currentCRMs = [
  'Salesforce',
  'HubSpot',
  'Microsoft Dynamics',
  'Pipedrive',
  'Other'
]

const crmTools = [
  'Outreach',
  'Clay',
  'Gong',
  'SalesLoft',
  'Apollo',
  'ZoomInfo',
  'LinkedIn Sales Navigator',
  'Other'
]

const painPoints = [
  'Manual data entry',
  'Finding relevant information',
  'Maintaining data accuracy',
  'System complexity',
  'Integration with other tools',
  'Relationship tracking',
  'Getting complete customer view'
]

const desiredFeatures = [
  'Automatic data capture from emails/calendar',
  'Voice input for notes and updates',
  'Relationship strength tracking',
  'AI-powered insights',
  'Automatic connection discovery',
  'Visual relationship mapping',
  'Other'
]

export default function Survey() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">RelationshipOS Discovery Survey</h1>
            
            <form className="space-y-8">
              {/* Basic Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="role">What is your current role?</Label>
                    <Select name="role" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem key={role} value={role.toLowerCase()}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="org-size">Size of your organization</Label>
                    <Select name="org-size" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select name="industry" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry.toLowerCase()}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Current CRM Usage Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Current CRM Usage</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-crm">What CRM system do you currently use?</Label>
                    <Select name="current-crm" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current CRM" />
                      </SelectTrigger>
                      <SelectContent>
                        {currentCRMs.map((crm) => (
                          <SelectItem key={crm} value={crm.toLowerCase()}>
                            {crm}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>What additional CRM-related tools are you using?</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      {crmTools.map((tool) => (
                        <div key={tool} className="flex items-center space-x-2">
                          <Input
                            type="checkbox"
                            id={tool}
                            name="crm-tools"
                            value={tool}
                            className="h-4 w-4"
                          />
                          <Label htmlFor={tool}>{tool}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Hours per week spent on CRM-related data entry</Label>
                    <Select name="time-spent" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time spent" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<2">Less than 2 hours</SelectItem>
                        <SelectItem value="2-5">2-5 hours</SelectItem>
                        <SelectItem value="6-10">6-10 hours</SelectItem>
                        <SelectItem value="10+">More than 10 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Work week distribution</Label>
                    <p className="text-sm text-gray-500 mb-4">Please adjust the sliders to show how your work week is distributed. The total should add up to 100%.</p>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm text-gray-500">Administrative tasks (%)</Label>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">0%</span>
                          <Slider 
                            defaultValue={[30]} 
                            max={100} 
                            step={1}
                            name="admin-percentage"
                            className="flex-1"
                          />
                          <span className="text-sm text-gray-500">100%</span>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-500">Relationship building (%)</Label>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">0%</span>
                          <Slider 
                            defaultValue={[70]} 
                            max={100} 
                            step={1}
                            name="relationship-percentage"
                            className="flex-1"
                          />
                          <span className="text-sm text-gray-500">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pain Points Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Pain Points</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label>Rate your biggest challenges</Label>
                    <p className="text-sm text-gray-500 mb-4">Rate each challenge on a scale of 1-5 (1 = least painful, 5 = most painful)</p>
                    {painPoints.map((point) => (
                      <div key={point} className="mt-2">
                        <Label className="text-sm">{point}</Label>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">1</span>
                          <Slider
                            defaultValue={[3]}
                            max={5}
                            step={1}
                            name={`pain-${point.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex-1"
                          />
                          <span className="text-sm text-gray-500">5</span>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-4">
                      <Label htmlFor="biggest-pain">What is the biggest pain point overall you currently struggle with when working with your CRM and clients?</Label>
                      <Textarea
                        id="biggest-pain"
                        name="biggest-pain"
                        placeholder="Please describe your biggest challenge..."
                        className="h-32 mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="capture-struggles">What information do you most often struggle to capture or find?</Label>
                    <Textarea
                      id="capture-struggles"
                      name="capture-struggles"
                      placeholder="Please describe..."
                      className="h-32"
                    />
                  </div>

                  <div>
                    <Label htmlFor="relationship-tracking">How do you currently track relationship strength and quality?</Label>
                    <Textarea
                      id="relationship-tracking"
                      name="relationship-tracking"
                      placeholder="Please describe your current process..."
                      className="h-32"
                    />
                  </div>
                </div>
              </div>

              {/* Future Solution Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Future Solution</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label>Most valuable features in a new CRM system (Select top 3)</Label>
                    <div className="grid grid-cols-1 gap-4 mt-2">
                      {desiredFeatures.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Input
                            type="checkbox"
                            id={feature}
                            name="desired-features"
                            value={feature}
                            className="h-4 w-4"
                          />
                          <Label htmlFor={feature}>{feature}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Time savings needed to justify switch</Label>
                    <RadioGroup defaultValue="6-10">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-5" id="r1" />
                        <Label htmlFor="r1">2-5 hours per week</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6-10" id="r2" />
                        <Label htmlFor="r2">6-10 hours per week</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="11-20" id="r3" />
                        <Label htmlFor="r3">11-20 hours per week</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="20+" id="r4" />
                        <Label htmlFor="r4">More than 20 hours per week</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="switch-concerns">What would be your biggest concerns about switching?</Label>
                    <Textarea
                      id="switch-concerns"
                      name="switch-concerns"
                      placeholder="Please describe your concerns..."
                      className="h-32"
                    />
                  </div>

                  <div>
                    <Label htmlFor="switch-features">What features and functions would make you most likely to switch and why?</Label>
                    <p className="text-sm text-gray-500 mb-2">Please explain which specific features would convince you to switch from your current solution</p>
                    <Textarea
                      id="switch-features"
                      name="switch-features"
                      placeholder="Please describe the features that would motivate you to switch..."
                      className="h-32"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Contact Information (Optional)</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Input
                      type="checkbox"
                      id="early-adopter"
                      name="early-adopter"
                      className="h-4 w-4"
                    />
                    <Label htmlFor="early-adopter">I'm interested in being an early adopter</Label>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Submit Survey
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}